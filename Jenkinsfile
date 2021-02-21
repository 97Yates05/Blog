pipeline {
  agent any
  stages {
    stage('构建镜像') {
      steps {
        sh 'docker build -t personal/blog .'
      }
    }
    stage('删除空悬镜像') {
      steps {
        sh 'docker rmi $(docker images -f "dangling=true" -q)'
      }
    }
  }
  post {
      always {
        echo '流水线完成'
      }
  }
}
