pipeline {
  agent any
  stages {
    stage('构建镜像') {
      steps {
        sh 'docker build -t personal/blog .'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}
