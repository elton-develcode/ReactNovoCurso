
<img align="right" width="20%" src="https://github.com/elton-develcode/images/blob/master/logos/logo_instala_146x146.png">

# Lm-Instala-Core

Module in [Leroy Merlin](https://www.leroymerlin.com.br/) :copyright: - **Instala** is responsible for managing work orders.

</br></br>

> Leroy Merlin Brazil  🇧🇷 - Instala Team

</br>

**Why:** To manage the internal and external services provided.

**What:** Service Orders.
</br></br></br>

## Summary
</br>

The **Lm-Instala-Core** manages internal and external service orders allowing tracking of order status, service provider, deadlines.

</br>

## Concepts

</br>

Let's say you buy a [Leroy Merlin](https://www.leroymerlin.com.br/) :copyright: product and need to use an installation service.

Let's imagine buying an air conditioner.

Leroy Merlin will manage for you the entire work order process, such as the time available to perform the service, the professional qualified to perform the service, service scheduling, types of services provided, among others.

</br></br>

## Getting started

### Getting it

* **Software**
  * [Java JDK](https://www.oracle.com/technetwork/pt/java/javase/overview/index.html) - Java Development Kit 8+
  * [Maven](https://maven.apache.org/) - Dependency management 3.3+
  * [Mysql](https://www.mysql.com/) - Database 8+
  * [Docker](https://docs.docker.com/install) - Infrastructure settings 17.06.0+
  * [Docker-compose](https://docs.docker.com/compose/install) - Container orchestrator 1.6.0+

* **Hardware**
  * Core i3 processor or better
  * 2Gb Ram (recommended min 4GB)
  * Internet Access (required for Github Login)

 </br></br>

### Installing It

1. :octocat: Clone this repository and go to the lm-instala-core folder:
 

```
git clone https://github.com/leroy-merlin-br/lm-instala-core.git

cd lm-instala-core
```

</br></br>

### Configuring It

 Settings for docker-compose.yml

 ##### JWT

   JSON Web Token (JWT) is an industry-standard RCT 7519 method for performing two-party authentication through a signed token that   authenticates a web request. This token is a Base64 code that stores JSON objects with data that allows request authentication.
 ```
  JWT_SECRET = {jwt_secret}
 ```

 ##### DB_URL

  Is the required JDBC String to connect to mysql database with java or the mysql workbench tool too.
 ```
  DB_URL = jdbc:mysql://{ip}:{port}/{db_schema}
 ```

 ##### DB_USER

  Parameter required for database access authorization.
  ```
   DB_USER = {username}
  ```

 ##### DB_PASSWORD

 Parameter required for database access authorization.
 ```
  DB_PASSWORD = {password}
 ```

 ##### MAIL_HOST

 Parameter required for authorization to access the deploy platform.
 ```
  MAIL_HOST = {mail_host}
 ```

 ##### MAIL_PORT

 Parameter required for authorization to access the deploy platform.
 ```
  MAIL_PORT = {mail_port}
 ```

 ##### MAIL_USER

 Parameter required for authorization to access the deploy platform.
 ```
  MAIL_USER = {mail_user}
 ```

 ##### MAIL_PASSWORD

 Parameter required for authorization to access the deploy platform.
 ```
  MAIL_PASSWORD = {mail_password}
 ```
 :bangbang: Where {ip}, {port}, {db_schema}, {username}, {password}, {mail_host}, {mail_port}, {mail_user} and
{mail_password} must be replaced with actual database and mail values.

 Example for docker-compose.yml:
</br>
```
 version: '3.1'
 services:
   web:
     build:
       context: .
       dockerfile: Dockerfile
       args:
         PARAM: argument
     container_name: name_for_container_docker
     ports:
       - 8089:8080
     environment:
       DB_URL: jdbc:mysql://db_url:3306/database
       DB_USER: user
       DB_PASSWORD: password
       JWT_SECRET: token
       MAIL_HOST: email@email.com
       MAIL_PORT: 123
       MAIL_USER: User
       MAIL_PASSWORD: password
       API_INSTALA: http://localhost:8086/lm-instala-api
       API_INSTALA_PDP: http://localhost:8087/lm-instala-provider
       API_INSTALA_AUTH: http://localhost:8086/lm-instala-api
       API_INSTALA_PARAM: http://localhost:8089/lm-instala-parameters
       API_INSTALA_I18N: http://localhost:8086/lm-instala-api
       API_INSTALA_SATSFTN: http://localhost:8086/lm-instala-rating
       API_KEY: key
```
 :warning:  Important file identification

</br></br>

### Running it

1. On terminal type
```
mvn clean install -Dmaven.test.skip=true
```

2. Use docker-compose to start :

```
docker-compose up --build
```
> Check in the docker-compose.yml file what port will be exposed on your host and ensure that they are not already used.

When all components are started, you can access the app at :
* **http://localhost:8086**


</br></br>

## Testing

To run the tests, run the command :pray:

```
mvn test
```
Maven himself is in charge of running the tests and returning the results.

</br>

## Main Features

- Authentication
- Services and flow configuration
- Service Order Flow
- Service Provider ans Crasfstman handling

</br></br>

## Contributing

Reporting bugs or unexpected behavior, and/or non-standard code

You might want to open an issue to discuss something that you believe that should belong to this API or even go ahead and open a Pull Request with your proposal. We have a Continuous Integration server that will make sure that the tests are passing and the coding standard is ok. Also, all pull requests are reviewed :wink:

 * [Developers](https://github.com/adeo/lm-instala-core/blob/developer/DEVELOPERS.md)
 * [Code of Conduct](https://github.com/adeo/lm-instala-core/blob/developer/CODE_OF_CONDUCT.md)
 * [Contributing](https://github.com/leroy-merlin-br/lm-mobile-api/blob/developer/CONTRIBUTING.md)


 </br></br>

 ## Maintainers

  * :email: Emerson Danieleski - emerson.danieleski@develcode.com.br
  * :email: Gabriel Souza - gsouza@ext.leroymerlin.com.br
  * :email: João P. Grasselli - joao.grasselli@develcode.com.br
  
  Feel free to join our team on [**Slack**](https://lminstala.slack.com/signup)

  </br></br></br>

