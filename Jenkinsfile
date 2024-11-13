pipeline {
    agent {
        label 'naul'
    }

    stages {
        stage('Checkout') {
            steps {
                // Lấy mã nguồn từ hệ thống quản lý mã nguồn (ví dụ: Git)
                git 'https://github.com/CallMeNaul/ThreadditDeployment.git'
            }
        }
        stage('Scan image') {
            steps {
                script {
                    //sh 'docker-compose -f docker-compose.yml up -d'
                    sh 'docker-compose -f docker-compose.yml up -d'
                    sh 'trivy image thdyu/threaddit > vulnerabilities.txt'
                    sh 'cat vulnerabilities.txt'
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
