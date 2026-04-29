pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Xlvin95/process-flow-visualizer.git'
            }
        }

        stage('SonarQube Scan') {
    steps {
        sh '''
        docker run --rm \
        --network devops-net \
        -e SONAR_HOST_URL=http://sonarqube:9000 \
        -v $(pwd):/usr/src \
        sonarsource/sonar-scanner-cli \
        -Dsonar.projectKey=devops-dashboard \
        -Dsonar.sources=. \
        -Dsonar.inclusions=**/*.html,**/*.css,**/*.js \
        -Dsonar.login=YOUR_TOKEN
        '''
    }
}

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
