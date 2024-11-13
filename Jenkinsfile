pipeline {
    agent {
        label 'naul'
    }
    environment {
        sourceCode = "https://github.com/CallMeNaul/ThreadditDeployment.git"
        image = "thdyu/threaddit"
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
                git $(sourceCode)
            }
        }
        stage('Scan image') {
            steps {
                ////sh 'docker-compose -f docker-compose.yml up -d'
                sh (script:""" trivy image thdyu/threaddit > vulnerabilities.txt; cat vulnerabilities.txt """, label: "Check Vulnerabilities")
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
