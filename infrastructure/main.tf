provider "aws" {
  region = "eu-north-1"
}

terraform {
  backend "s3" {
    bucket  = "filmstry-app-tf-state"
    key     = "app-filmstry.tfstate"
    region  = "eu-north-1"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Jesper Zachrisson"
  }
}

