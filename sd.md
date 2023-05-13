1. **Update your Ubuntu server**: Before beginning the installation process, make sure your Ubuntu server is up-to-date. Connect to your server using SSH and run the following command:

```
    sudo apt update && sudo apt upgrade -y
``` 

**Install dependencies**: Install the necessary dependencies required for Diffusion by running the following command:

```
    sudo apt install -y openjdk-11-jre-headless unzip

```

 

**Download Diffusion**: Visit the [Pushtechnology/Diffusion](https://www.pushtechnology.com/product/) website and download the latest stable version of Diffusion. After downloading, transfer the Diffusion zip file to your Ubuntu server using SCP, SFTP or any other file transfer method. 

**Unzip Diffusion**: Unzip the Diffusion zip file to your desired location on the Ubuntu server. For example:

```
    unzip Diffusion-version.zip -d /opt/diffusion
```
    
Replace `Diffusion-version.zip` with the actual file name, and `/opt/diffusion` with your desired installation directory. 

**Configure Diffusion**: Change the directory to the Diffusion installation folder and open the `etc/Server.xml` configuration file using a text editor, like nano or vim. For example:

```
    cd /opt/diffusion\nnano etc/Server.xml
```

In the configuration file, find the `interface-address` element and replace its value with your Ubuntu server's local IP address, which will make the Diffusion server accessible from other computers within the same network.

```
    <interface-address>your-server-ip-address</interface-address>
```

Save and close the configuration file. 

**Start Diffusion**: To start the Diffusion server, run the following command:

```
./bin/diffusion.sh start
```

**Open ports**: If you have a firewall enabled on your Ubuntu server, you may need to open the required ports. By default, Diffusion uses ports 8080, 8081, and 8443. Update your firewall rules accordingly to allow connections to these ports. Here's an example using `ufw`:

```
sudo ufw allow 8080/tcp\nsudo ufw allow 8081/tcp
sudo ufw allow 8443/tcp
``` 

**Access the Diffusion UI on a Windows machine**: Using a web browser on your Windows machine, access the Diffusion Management Console at `http://your-server-ip-address:8081`. Replace \"your-server-ip-address\" with the actual server's IP address. This will open the Diffusion UI, where you can log in and manage your Diffusion server. 

**Log in to the Diffusion UI**: By default, the Diffusion Management Console uses \"admin\" as the username and \"password\" as the password. Log in with these credentials, and you should have access to the Diffusion UI. Don't forget to change the default password after logging in to improve security.