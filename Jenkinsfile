pipeline {
    agent any 

    stages {
        stage('Checkout') {
            steps {
                // Lấy mã nguồn từ hệ thống quản lý mã nguồn (ví dụ: Git)
                git branch: 'main',
                    url 'https://github.com/CallMeNaul/ThreadditDeployment.git'
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
