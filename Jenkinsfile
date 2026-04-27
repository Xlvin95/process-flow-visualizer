pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-dashboard .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker stop dashboard || true
                docker rm dashboard || true
                docker run -d -p 5000:80 --name dashboard devops-dashboard
                '''
            }
        }
    }
}