pipeline{
    agent any
    
    tool {nodejs "nodejs18"}

    stages{
        stage('Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('e2e Tests'){
            steps{
                sh 'npx cypress run'
            }
        }
    }
}