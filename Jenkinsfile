pipeline {
    agent {
        docker {
            image "telmocorrea/node-wd"
        }
    }
    stages {
        stage("Build"){
            steps{
                sh "npm install"
            }
        }
         stage("Tests"){
             steps{
                sh "npm run test:ci"
             }
        }
    }
}