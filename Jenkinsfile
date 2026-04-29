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
                -e SONAR_HOST_URL="http://35.200.232.139:9000" \
                -v $(pwd):/usr/src \
                sonarsource/sonar-scanner-cli \
                -Dsonar.projectKey=devops-dashboard \
                -Dsonar.sources=/usr/src \
                -Dsonar.inclusions=**/*.html,**/*.css,**/*.js \
                -Dsonar.host.url=http://35.200.232.139:9000 \
                -Dsonar.login=sqp_7097d589edc4df25b967e621731c1231ba7dbd51
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
