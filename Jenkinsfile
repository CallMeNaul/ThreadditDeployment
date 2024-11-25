pipeline {
    agent {
        label 'naul'
    }
    environment {
        sourceCode = "https://github.com/CallMeNaul/ThreadditDeployment.git"
        image = "callmenaul/threaddit-v"
        version = "${env.BUILD_NUMBER}"
        tag = "latest"
        imageName = "${image}${version}:${tag}"
        scanFile = "vulnerabilities.txt"
        scannerHome = "/opt/sonar-scanner"
        SONAR_PROJECT_KEY = "Threaddit"
        SONAR_PROJECT_VERSION = "${env.BUILD_NUMBER}"
        SONARQUBE_URL = "http://sonarqube.local:9000"
        SONAR_QUBE_TOKEN = "sqp_aea9c9843abe2dbd8211c3ba832335c2ad5ce9d5"
    }
    stages {
        stage('Info') {
            steps {
                sh (script:"""whoami;pwd;ls""", label: "Check information")
            }
        }
        stage('Checkout') {
            steps {
                git sourceCode
            }
        }
        stage('OWASP Dependency-Check') {
            steps {
                dependencyCheck additionalArguments: '--format HTML', odcInstallation: 'DP-Check'
            }
        }
        stage('Post-Check Analysis') {
            steps {
                script {
                    def reportFilePath = 'dependency-check-report.html'
                    def criticalVuls = checkVulnerabilities(reportFilePath)

                    if (criticalVuls > 0) {
                        error("Build failed due to ${criticalVuls} critical vulnerabilities found!")
                    } else {
                        echo "No critical vulnerabilities found."
                    }
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                script {
                    withSonarQubeEnv('sq1') {
                        sh "${scannerHome}/bin/sonar-scanner " +
                            "-Dsonar.projectKey=${SONAR_PROJECT_KEY} " +
                            "-Dsonar.projectVersion=${SONAR_PROJECT_VERSION} " +
                            "-Dsonar.sources=. " +
                            "-Dsonar.host.url=${SONARQUBE_URL} " +
                            "-Dsonar.token=${SONAR_QUBE_TOKEN}"
                    }
                }
            }
        }
        stage('Quality Gate') {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
        stage('Build Image') {
            steps {
                sh (script:""" docker build -t ${imageName} . """, label: "Build Image with Dockerfile")
            }
        }
        // stage('Docker Login') {
        //     steps {
        //         script {
        //             withCredentials([usernamePassword(credentialsId: 'login-ghcr.io', usernameVariable: 'USR', passwordVariable: 'PSW')]) {
        //                 sh 'echo $PSW | docker login ghcr.io -u $USR --password-stdin'}
        //         }
        //     }
        // }
        stage('Scan image') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'login-ghcr.io', usernameVariable: 'USR', passwordVariable: 'PSW')]) {
                        sh 'echo $PSW | docker login ghcr.io -u $USR --password-stdin'}
                }
                
                sh (script:""" docker run --rm -v /var/run/docker.sock:/var/run/docker.sock -v trivy-db:/root/.cache/ aquasec/trivy image --cache-dir /root/.cache/ --no-progress --exit-code 1 --severity HIGH,CRITICAL ${imageName} > ${scanFile}; """, label: "Check Vulnerabilities")
                sh (script:""" cat ${scanFile} """, label: "Display Vulnerabilities")
            }
        }
        stage('Push Image to DockerHub') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'jenkinspipelineaccesstoken', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'}
                    sh 'docker push ${imageName}'
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
