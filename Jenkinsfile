def label = "worker-${UUID.randomUUID().toString()}"

podTemplate(label: label, cloud: 'kubernetes',
    containers: [
        containerTemplate(name: 'certified', image: '10.0.0.209/wt/node:10-certified', ttyEnabled: true, command: 'cat')
    ],
    volumes: [
        hostPathVolume(mountPath: '/var/run/docker.sock', hostPath: '/var/run/docker.sock'),
        hostPathVolume(mountPath: '/tmp/cache', hostPath: '/tmp/cache/wt-eros'),
        hostPathVolume(mountPath: '/root/.ssh', hostPath: '/root/.ssh')
    ]
) {
    node(label) {
        

        def scmVars = checkout scm
        def commit = scmVars.GIT_COMMIT
        def branch = scmVars.GIT_BRANCH


        stage('Run Unit Test') {
            script {

                sh 'printenv'
                sh 'git describe --tags'
                
            }
        
        }

    }
}
