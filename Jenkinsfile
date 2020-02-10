pipeline {
    agent {
        docker {
            image "telverneck/note-wd"
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