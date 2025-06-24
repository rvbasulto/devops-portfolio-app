provider "aws" {
  region = "us-east-1"
}

resource "aws_key_pair" "devops_key" {
  key_name   = "devops-key"
  public_key = file("~/.ssh/id_rsa.pub")
}

resource "aws_security_group" "devops_sg" {
  name        = "devops-sg"
  description = "Allow SSH and app access"
  vpc_id      = null # Puedes eliminar o completar esto si trabajas dentro de una VPC personalizada

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "App access"
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
  description = "Allow ping (ICMP)"
  from_port   = -1
  to_port     = -1
  protocol    = "icmp"
  cidr_blocks = ["0.0.0.0/0"]
}

  egress {
    description = "Allow all outbound"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "devops_app" {
  ami                    = "ami-0c7217cdde317cfec" # Ubuntu 22.04 (us-east-1)
  instance_type          = "t2.micro"
  key_name               = aws_key_pair.devops_key.key_name
  vpc_security_group_ids = [aws_security_group.devops_sg.id]
  user_data              = file("user-data.sh")

  tags = {
    Name = "devops-portfolio-app"
  }
}
