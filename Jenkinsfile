pipeline {
    agent {
        label 'naul'
    }
    environment {
        sourceCode = "https://github.com/CallMeNaul/ThreadditDeployment.git"
        sourceUrl = "github.com/CallMeNaul/ThreadditDeployment.git"
        image = "callmenaul/threaddit-v"
        version = "${env.BUILD_NUMBER}"
        tag = "latest"
        imageName = "${image}${version}:${tag}"
        codeScanFile = "codeVulnerabilities.txt"
        imageScanFile = "imageVulnerabilities.txt"
        scannerHome = "/opt/sonar-scanner"
        SONAR_PROJECT_KEY = "Threaddit"
        SONARQUBE_URL = "http://sonarqube.local:9000"
        SONAR_QUBE_TOKEN = credentials('sonarqube-token')
        deployBranch = "duy-branch"
        deploymentFile = './kubernetes/app-deployment.yaml'
    }
    stages {
        stage('Info') {
            steps {
                sh (script:"""whoami;pwd;ls""", label: "Check information")
            }
        }
        stage('Cleanup Workspace Before Build') {
            steps {
                cleanWs()
            }
        }
        stage('Checkout Before Build') {
            steps {
                git sourceCode
            }
        }
        // stage('SonarQube Analysis') {
        //     steps {
        //         script {
        //             withSonarQubeEnv('sq1') {
        //                 sh "${scannerHome}/bin/sonar-scanner " +
        //                     "-Dsonar.projectKey=${SONAR_PROJECT_KEY} " +
        //                     "-Dsonar.sources=. " +
        //                     "-Dsonar.host.url=${SONARQUBE_URL} " +
        //                     "-Dsonar.token=${SONAR_QUBE_TOKEN}"
        //             }
        //         }
        //         waitForQualityGate abortPipeline: false, credentialsId: 'login-sonarqube'
        //     }
        // }
        // stage('OWASP Dependency-Check') {
        //     steps {
        //         dependencyCheck additionalArguments: '--format HTML', odcInstallation: 'DP-Check'
        //         script {
        //             def reportFilePath = 'dependency-check-report.html'
        //             def criticalVuls = checkVulnerabilities(reportFilePath)

        //             if (criticalVuls > 0)
        //             {
        //                 error("Build failed due to ${criticalVuls} critical vulnerabilities found!")
        //             }
        //             else
        //             {
        //                 echo "No critical vulnerabilities found."
        //             }
        //         }
        //     }
        // }
        // stage('Trivy Scan') {
        //     steps {
        //         script {
        //             sh(script: """ docker run --rm -v trivy-db:/root/.cache/ aquasec/trivy fs --cache-dir /root/.cache/ --no-progress --exit-code 1 --severity HIGH,CRITICAL . > ${codeScanFile}""", label: "Check Code Vulnerabilities")
        //              sh(script: """ cat ${codeScanFile} """, label: "Display Code Vulnerabilities")
        //          }
        //     }
        // }
        stage('Build Image') {
            steps {
                sh(script: """ docker build -t ${imageName} . """, label: "Build Image with Dockerfile")
                    }
        }
        // stage('Scan image') {
        //     steps {
        //         script {
        //             withCredentials([usernamePassword(credentialsId: 'login-ghcr.io', usernameVariable: 'USR', passwordVariable: 'PSW')]) {
        //                 sh 'echo $PSW | docker login ghcr.io -u $USR --password-stdin'}
        //         }

        //         sh(script: """ docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v trivy-db:/root/.cache/ aquasec/trivy image --cache-dir /root/.cache/ --no-progress --exit-code 1 --severity HIGH,CRITICAL --ignore-unfixed ${imageName} > ${imageScanFile}; """, label: "Check Image Vulnerabilities")
        //                 sh(script: """ cat ${imageScanFile} """, label: "Display Image Vulnerabilities")
        //             }
        // }
        stage('Push Image to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'jenkinspipelineaccesstoken', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'}
                    sh 'docker push ${imageName}'
                    sh 'docker rmi ${imageName}'
                    version = (env.version.toInteger() + 1).toString()
                }
            }
        }

        stage('Cleanup Workspace Before Deployment') {
            steps {
                cleanWs()
            }
        }
        stage('Checkout Before Deployment') {
            steps {
                git branch: "${deployBranch}", url: "${sourceCode}"
            }
        }
        // stage('Setup Git Configuration') {
        //     steps {
        //         script {
        //             withCredentials([usernamePassword(credentialsId: 'username-and-email-push-to-github-from-jenkins', usernameVariable: 'username', passwordVariable: 'email')]) {
        //                 def configuredEmail = sh(script: "git config --get user.email", returnStdout: true).trim()
        //                 if (configuredEmail != email) {
        //                     echo "Configuring user.email to ${email}"
        //                     sh "git config user.email '${email}'"
        //                 }
                        
        //                 def configuredUsername = sh(script: "git config --get user.name", returnStdout: true).trim()
        //                 if (configuredUsername != username) {
        //                     echo "Configuring user.name to ${username}"
        //                     sh "git config user.name '${username}'"
        //                 }
        //                 def remoteUrl = sh(script: "git remote get-url origin", returnStdout: true).trim()
        //                 if (remoteUrl != sourceCode) {
        //                     echo "Remote URL is ${remoteUrl}. Adding the correct remote."
        //                     sh "git remote remove origin"
        //                     sh "git remote add origin ${sourceCode}"
        //                 }
        //                 def currentBranch = sh(script: "git rev-parse --abbrev-ref HEAD", returnStdout: true).trim()
        //                 if (currentBranch != deployBranch) {
        //                     echo "Current branch is ${currentBranch}. Switching to branch ${deployBranch}."
        //                     sh 'git checkout ${deployBranch}'
        //                 }
        //             }
                    
        //         }
        //     }
        // }
        stage('Update Deployment File') {
            steps {
                script {
                    sh 'sed -i "s/callmenaul\\/threaddit-v[^:]*:latest/callmenaul\\/threaddit-v${version}:latest/g" ${deploymentFile}'
                    sh 'cat ${deploymentFile}'
                }
            }
        }
        stage('Commit Changes') {
            steps {
                script {
                    sh 'git add ./kubernetes/app-deployment.yaml'
                    sh 'git status'
                    sh 'git commit -m "Update deployment file to use version v${version}"'
                    withCredentials([usernamePassword(credentialsId: 'login-and-push-from-jenkins', usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_TOKEN')]) {
                        sh 'git push https://${GITHUB_USERNAME}:${GITHUB_TOKEN}@${sourceUrl} ${deployBracnh}'}
                    sh 'git config user.email luanyou952003@gmail.com'
                    sh 'git config user.name CallMeNaul'
                    sh 'git checkout master'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

def checkVulnerabilities(reportFilePath) {
    def criticalCount = 0
    def htmlContent = readFile(reportFilePath)

    if (htmlContent.contains("Critical")) {
        def matcher = (htmlContent =~ /<td class="severity">Critical<\/td>/)
        criticalCount = matcher.count
    }
    return criticalCount
}
