pipeline {
  agent any
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm run test'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Preview') {
      steps {
        sh 'npm run preview'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh 'set -x'
        sh 'kill $(cat .pidfile)'
      }
    }
  }
}