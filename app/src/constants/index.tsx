export const tech = [
  { name: "Terraform", src: "/terraform.png" },
  { name: "Ansible", src: "/ansible.svg" },
  { name: "AWS", src: "/aws-logo.webp" },
  { name: "Jenkins", src: "/jenkins.png" },
  { name: "Github Actions", src: "/github-actions.png" },
  { name: "Docker", src: "/docker.webp" },
  { name: "Kubernetes", src: "/kubernetes.png" },
  { name: "CloudWatch", src: "/cloudwatch.png" },
  { name: "Prometheus", src: "/prometheus.png" },
  { name: "Linux", src: "/linux.png" },
  { name: "Bash", src: "/bash.png" },
  { name: "Java", src: "/java.webp" },
  { name: "Python", src: "/python.png" },
  { name: "SQL", src: "/sql.png" },
  { name: "YAML", src: "/yaml-logo.png" },
  { name: "Vagrant", src: "/vagrant.png" },
  { name: "VirtualBox", src: "/virtual-box.png" },
];

export const devopsProjects = [
    {
        "slug": "ansible-lab-with-vagrant-and-virtualbox",
        "backgroundImage": "/bruma.png",
        "foregroundImage": "/green.png",
        "title": "Ansible Lab with Vagrant & VirtualBox",
        "description": "Automated multi-OS local infrastructure lab using Vagrant and Ansible for DevOps testing, provisioning CentOS and Ubuntu nodes.",
       fullDescription: `
          <p><strong>Tech Stack:</strong> Vagrant, VirtualBox, Ansible, Ubuntu, CentOS, Bash, YAML</p>
          <hr />

          <h3>Project Goal</h3>
          <p>To build a fully automated and reproducible multi-node infrastructure lab using Vagrant and Ansible, capable of provisioning and configuring heterogeneous Linux systems for DevOps experimentation and skill-building.</p>
          <hr />

          <h3>Project Description</h3>
          <p>This project sets up a local virtual environment consisting of:</p>
          <ul>
            <li><strong>One control node:</strong> Ubuntu 22.04</li>
            <li><strong>Four managed nodes:</strong> three CentOS Stream 9 (web01, web02, db01) and one Ubuntu (web03)</li>
            <li>All nodes connected through a private network (192.168.56.0/24)</li>
          </ul>
          <p>Using a custom Vagrantfile, the control node is provisioned via <code>provision-control.sh</code>, which:</p>
          <ul>
            <li>Installs Ansible</li>
            <li>Configures SSH agent forwarding</li>
            <li>Generates a dynamic inventory (hosts.ini) and ansible.cfg</li>
          </ul>
          <p>Ansible is then used to automate all post-deployment tasks using the <code>post-install</code> role.</p>
          <hr />

          <h3>Infrastructure Architecture</h3>
          <p><strong>Vagrant Provisions</strong></p>
          <ul>
            <li><strong>Control Node:</strong> Ubuntu 22.04, 1 GB RAM, 1 vCPU, static IP 192.168.56.10</li>
            <li><strong>CentOS Clients:</strong> web01, web02, db01 with static IPs 192.168.56.11–.12–.14</li>
            <li><strong>Ubuntu Client:</strong> web03, IP 192.168.56.13</li>
            <li><strong>Private Network:</strong> Static IPs for all VMs within 192.168.56.0/24</li>
            <li><strong>SSH Agent Forwarding:</strong> Configured for seamless and passwordless access between nodes</li>
          </ul>
          <hr />

          <h3>Provisioning Logic (Shell + Ansible)</h3>
          <h5>provision-control.sh (Shell)</h5>
          <p>Executed only on the control node, this script:</p>
          <ul>
            <li>Installs Ansible from the official PPA</li>
            <li>Configures SSH for agent forwarding and disables host key checking</li>
            <li>Generates:</li>
            <ul>
              <li>ansible.cfg</li>
              <li>hosts.ini grouped into [web] and [db]</li>
              <li>inventory (YAML format)</li>
            </ul>
            </ul>
            <p>inventory (YAML format)</p>
            <ul>
            <li>Defines host groups: webservers, dbservers, and dc_oregon (parent group)</li>
            <li>Sets host-specific variables (ansible_host)</li>
            <li>Sets group-wide configuration:
              <ul>
                <li>ansible_user: vagrant</li>
                <li>ansible_ssh_private_key_file</li>
                <li>ansible_python_interpreter</li>
              </ul>
            </li>
          </ul>
          <hr />

          <h3>Ansible Role: post-install</h3>
          <p>Executed via provisioning.yaml, this role automates full post-deployment configuration across all systems.</p>
          <h5>Package Installation (Conditional by OS)</h5>
          <ul>
            <li><strong>CentOS Nodes:</strong> Installs chrony, wget, git, zip, unzip using yum</li>
            <li><strong>Ubuntu Nodes:</strong> Installs ntp, wget, git, zip, unzip using apt</li>
          </ul>
          <h5>Time Synchronization Setup</h5>
          <ul>
            <li>Enables and starts:
              <ul>
                <li>chronyd on RedHat-based systems</li>
                <li>ntp on Debian/Ubuntu systems</li>
              </ul>
            </li>
            <li>Deploys templated NTP config files:
              <ul>
                <li>ntp_redhat.conf.j2 or ntp_debian.conf.j2</li>
              </ul>
            </li>
          </ul>
          <h5>User and System Configuration</h5>
          <ul>
            <li>Creates system group: devops</li>
            <li>Adds users defined in the <code>usernames</code> variable to that group</li>
            <li>Customizes /etc/motd with an Ansible-managed banner</li>
            <li>Creates working directory: /opt/devdata with 0775 permissions</li>
          </ul>
          <hr />
          <h3>Outcomes</h3>
          <ul>
            <li><strong>Reusable Infrastructure:</strong> Built a repeatable multi-OS lab with a single <code>vagrant up</code></li>
            <li><strong>Fully Automated Provisioning:</strong> From OS install to final service configuration via a single Ansible role</li>
            <li><strong>Cross-platform Experience:</strong> Managed both Debian- and RedHat-based systems under a unified playbook</li>
            <li><strong>Secure & Dynamic SSH Access:</strong> Configured SSH agent forwarding and managed private key usage</li>
            <li><strong>Role-Based Ansible Design:</strong> Modular role <code>post-install</code> controls all logic with OS-aware conditions</li>
            <li><strong>Clean Project Structure:</strong> Organized with clear separation of playbooks, roles, inventory, variables, and templates</li>
          </ul>

          <hr />
          <h3>GitHub: <a href="https://github.com/rvbasulto/ansible-vagrant" target="_blank" rel="noopener noreferrer">View Repository</a></h3>
    `,
        "technologies": ["/ansible.png", "/vagrant.png", "/virtual-box.png", "/linux.png", "/bash.png", "/yaml-logo.png"],
         github:"https://github.com/rvbasulto/ansible-vagrant",
        "link": "/projects/ansible-lab-with-vagrant-and-virtualbox",
    },
    {
        "slug": "terraform-infrastructure-provisioning",
        "backgroundImage": "/bruma.png",
        "foregroundImage": "/terraform-infrastructure-provisioning.png",
        "title": "Terraform Infrastructure Provisioning",
        "description": "Provisioned EC2 instances and security groups on AWS using Terraform modules and SSH key automation for consistent and repeatable deployments.",
       fullDescription: `
       <h3>Tech Stack:</h3>
      <p>Terraform, AWS EC2, Security Groups, SSH, Ubuntu AMIs, Key Pairs, Git, AWS CLI</p>
      <hr/>

      <h3>Project Goal</h3>
      <p>To design and deploy cloud infrastructure on AWS using Terraform, applying Infrastructure as Code (IaC) principles to ensure automation, environment consistency, and maintainability.</p>
      <hr/>

      <h3>Project Description</h3>
      <p>This project provisions a basic but complete infrastructure in AWS using Terraform, with each resource declared in a modular and reusable <code>.tf</code> file. It showcases key practices in infrastructure automation, including dynamic data sourcing, secure access, and explicit security configuration.</p>

      <h5>Provider Configuration</h5>
      <ul>
        <li>Define in <code>provider.tf</code></li>
        <li>Sets the AWS provider and region dynamically based on user-defined variables</li>
      </ul>
      <h5>SSH Key Management</h5>
      <ul>
        <li>Generated locally via <code>ssh-keygen</code></li>
        <li>Public key stored and referenced in <code>keypair.tf</code> to enable secure EC2 instance access </li>
      </ul>
      <h5>Security Group</h5>
      <p>Defined in <code>security_group.tf</code>:</p>
      <ul>
        <li><strong>Inbound Rules:</strong>
        <ul>
          <li>Allow SSH (port 22) only from the user's public IP</li>
          <li>Allow HTTP (port 80) from any source (0.0.0.0/0)</li>
        </ul>
        </li>
        <li><strong>Outbound Rules:</strong>
        <ul>
          <li>Allow all traffic (IPv4 and IPv6) by default</li>
        </ul>
        </li>
      </ul>
       <h5>AMI Discovery</h5>
      <ul>
        <li>Uses a <code>data</code> block to fetch the latest Ubuntu AMI from the AWS Systems Manager Parameter Store </li>
        <li>Eliminates hardcoded AMI IDs, improving portability and automation</li>
      </ul>
      <h5>Instance Provisioning</h5>
      <p>Defined in <code>instance.tf</code>:</p>
      <ul>
        <li>Launches an EC2 instance with:
        <ul>
          <li>The latest Ubuntu AMI</li>
          <li>Custom tags (e.g., Name, Environment)</li>
          <li>Selected availability zone</li>
          <li>Associated security group and SSH key pair</li>
        </ul>
        </li>
      </ul>
      <h5>File Organization</h5>
      <p>The infrastructure is modularized into individual <code>.tf</code> files:</p>
      <ul>
        <li><code>provider.tf</code></li>
        <li><code>keypair.tf</code></li>
        <li><code>security_group.tf</code></li>
        <li><code>instance.tf</code></li>
      </ul>
      <p>This structure improves readability, version control, and separation of concerns.</p>
      <h5>Automation & Testing</h5>
      <ul>
        <li>Validated configurations with <code>terraform plan</code></li>
        <li>Deployed resources using <code>terraform apply</code></li>
        <li>Cleaned up with <code>terraform destroy</code> to ensure full lifecycle control</li>
      </ul>
      <hr/>

      <h3>Outcomes</h3>
      <ul>
        <li>Achieved consistent, repeatable deployments with version-controlled infrastructure definitions</li>
        <li>Reduced manual configuration time and human error during resource provisioning</li>
        <li>Laid the groundwork for more advanced infrastructure workflows, including remote backends, modules, and integrations with CI/CD</li>
      </ul>
      <hr/>

      <h3>GitHub: <a href="https://github.com/rvbasulto/Terraform-Infrastucture-Provisioning.git" target="_blank" rel="noopener noreferrer">View Repository</a></h3>
    `,
        "technologies": [
            "/terraform.png", "/aws-logo.webp","/linux.png", "/bash.png"   ],
        github:"https://github.com/rvbasulto/Terraform-Infrastucture-Provisioning.git",
        "link": "/projects/terraform-infrastructure-provisioning",
    },
    {
        "slug": "aws-rearchitecting-web-app",
        "backgroundImage": "/bruma.png",
        "foregroundImage": "/aws-re-architecting-web-app.png",
        "title": "AWS Re-Architecting Web App",
        "description": "Transformed a legacy monolithic app into a scalable, cloud-native architecture using AWS Elastic Beanstalk, RDS, CloudFront, S3, and more.",
        fullDescription: `
      <h3>Tech Stack</h3>
      <p> AWS Elastic Beanstalk, EC2, RDS (MySQL), ElastiCache (Redis), Amazon MQ, CloudFront, Route 53, S3, IAM, Security Groups, GitHub</p>
      <hr/>

      <h3>Project Goal</h3>
      <p>To transform a legacy monolithic web application into a modern, scalable, and reliable architecture using AWS managed services. The primary objectives were to improve performance, enable automation, enhance availability, and eliminate the need for manual server management.</p>
      <hr />

      <h3>Project Description</h3>
      <p>This project modernized a previously single-instance EC2 deployment by re-architecting it into a fully managed, cloud-native application using Platform-as-a-Service (PaaS) components from AWS.</p>
      <h5>Frontend Deployment</h5>
      <ul>
        <li>Repackaged and deployed the frontend on <strong>AWS Elastic Beanstalk</strong></li>
        <li>Integrated:
        <ul>
          <li><strong>Application Load Balancer</strong> for traffic distribution</li>
          <li><strong>Auto Scaling</strong> for performance under variable load</li>
          <li><strong>Amazon S3</strong> for storing and serving build artifacts</li>
        </ul>
        </li>
      </ul>
      <h5>Backend Services</h5>
      <ul>
        <li>Migrated the database from local EC2 to <strong>Amazon RDS (MySQL)</strong> to enable:
        <ul>
          <li>Automated backups</li>
          <li>Multi-AZ availability</li>
          <li>Easier maintenance and scaling</li>
        </ul>
        </li>
        <li>Integrated <strong>Amazon ElastiCache (Redis)</strong> for in-memory caching and reduced latency</li>
        <li>Used <strong>Amazon MQ</strong> for message brokering and asynchronous communication between components</li>
      </ul>
      <h5>Networking & Content Delivery</h5>
      <ul>
        <li>Configured <strong>Route 53</strong> for domain registration and DNS routing</li>
        <li>Integrated <strong>Amazon CloudFront</strong> as a CDN for global asset delivery</li>
        <li>Enabled secure communication with <strong>SSL certificates</strong> (HTTPS)</li>
      </ul>
      <h5>Security Configuration</h5>
      <ul>
        <li>Designed <strong>custom Security Groups</strong> to isolate and control traffic flow between application layers</li>
        <li>Applied <strong>IAM roles and policies</strong> to enforce least-privilege access for services and resources</li>
      </ul>
      <h5>Automation & Configuration</h5>
      <ul>
        <li>Used <strong>environment variables</strong> and custom <strong>deployment scripts</strong> to configure runtime parameters</li>
        <li>Managed source code via <strong>GitHub</strong>, ensuring reproducible builds and collaborative workflows</li>
      </ul>
      <hr/>
         
      <h3>Outcomes</h3>
      <ul>
        <li>Fully eliminated manual server management by leveraging PaaS and managed services</li>
        <li>Reduced deployment time and minimized configuration errors</li>
        <li>Significantly increased application scalability and fault tolerance</li>
        <li>Improved global performance and secure delivery with CDN and HTTPS integration</li>
      </ul>
    `,
        technologies: [ "/aws-logo.webp", "/linux.png", "/bash.png" ,"/sql.png" ],
        
        "link": "/projects/aws-rearchitecting-web-app",
    },
   
];
