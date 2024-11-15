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
        stage('Build Image') {
            steps {
                sh (script:""" docker build -t ${imageName} . """, label: "Build Image with Dockerfile")
            }
        }
        // stage('Push Image to DockerHub') {
        //     steps {
        //         script {
        //             withCredentials([usernamePassword(credentialsId: 'jenkinspipelineaccesstoken', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
        //                 sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'}
        //             sh 'docker push ${imageName}'
        //         }
        //     }
        // }
        stage('Scan image') {
            steps {
                //sh (script:""" trivy image ${imageName} > ${scanFile}; """, label: "Check Vulnerabilities")
                sh (script:""" docker pull aquasec/trivy; """, label: "Check Vulnerabilities")
                sh (script:""" docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image ${imageName} >  ${scanFile} """, label: "Check Vulnerabilities")
                sh (script:""" cat ${scanFile} """, label: "Display Vulnerabilities")
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
