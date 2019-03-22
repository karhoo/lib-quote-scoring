@Library(value="service-builder-shared-library@master", changelog=false) _
import com.karhoo.Constants

CICD {
  containerImages = [:]
  containerImages["builder"] = [name: "karhoo-nodejs", tag:"0.0.1"]
  npmRunTargets = ["ci", "test"]
  stepConfig = Constants.NO_DOCKER_IMAGE_NO_SCRATCH_ENV_NO_API_TESTS
}
