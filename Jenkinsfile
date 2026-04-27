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
        -e SONAR_HOST_URL="http://34.14.134.111:9000" \
        -v $(pwd):/usr/src \
        sonarsource/sonar-scanner-cli \
        -Dsonar.projectKey=devops-dashboard \
        -Dsonar.sources=/usr/src \
        -Dsonar.inclusions=**/*.html,**/*.css,**/*.js \
        -Dsonar.host.url=http://34.14.134.111:9000 \
        -Dsonar.login=sqp_63f9a974d7472fb603cf3a5b0524e60287c9f55d
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
