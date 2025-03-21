pipeline {
    agent any

    environment {
        NODEJS_HOME = tool 'NodeJS_18' // Use the configured NodeJS version
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'staging', url: 'https://github.com/satyammg/Web-Automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Publish Test Results') {
            steps {
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'cypress/reports',
                    reportFiles: 'index.html',
                    reportName: 'Cypress Test Report'
                ])
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/screenshots/**/*', fingerprint: true
        }
        success {
            echo 'Tests Passed Successfully!'
        }
        failure {
            echo 'Tests Failed! Check Reports.'
        }
    }
}
