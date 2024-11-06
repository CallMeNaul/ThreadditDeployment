pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                // Lấy mã nguồn từ hệ thống quản lý mã nguồn (ví dụ: Git)
                git 'https://github.com/CallMeNaul/ThreadditDeployment.git'
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
