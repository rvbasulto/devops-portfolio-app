output "public_ip" {
  description = "Public IP of the instance"
  value       = aws_instance.devops_app.public_ip
}
