
<img align="right" width="20%" src="https://github.com/elton-develcode/images/blob/master/logos/logo_instala_146x146.png">

# Lm-Instala-Android

Module in [Leroy Merlin](https://www.leroymerlin.com.br/) :copyright: - **Instala** is aplication Android.

</br></br>

> Leroy Merlin Brazil  🇧🇷 - Instala Team

</br>

**Why:** This android app is aimed for the Service Agent of the Instala project, allowing him to interact
with the Field Service Portal through calls to the API Layer.

**What:** App for the Leroy Merlin Instala project.
</br></br></br>

## Summary
</br>

The **Lm-Instala-Android** is an android app is aimed for the Service Agent of the **Instala** project

</br>

## Concepts

</br>

This app is intended for the Instala Project Service Provider, allowing them to interact with the Service Portal through smartphones.

</br></br>

## Getting started

### Getting it

* **Software**
  * [Java JDK](https://www.oracle.com/technetwork/pt/java/javase/overview/index.html) - Java Development Kit 8+
  * [Maven](https://maven.apache.org/) - Dependency management 3.3+
  * [Mysql](https://www.mysql.com/) - Database 8+
  * [Docker](https://docs.docker.com/install) - Infrastructure settings 17.06.0+
  * [Docker-compose](https://docs.docker.com/compose/install) - Container orchestrator 1.6.0+
  * [Node](https://nodejs.org/en) version 6+
  * [Yarn](https://yarnpkg.com/lang/en/): Manager package
  * [Android](https://developer.android.com/?hl=pt-br) SDK version 15+
  * [Firebase](https://firebase.google.com/?hl=pt-BR) Firebase account


* **Hardware**
  * Core i3 processor or better
  * 2Gb Ram (recommended min 4GB)
  * Internet Access (required for Github Login)

 </br></br>

### Installing It

1. :octocat: Clone this repository and go to the lm-instala-android folder:
 

```
git clone https://github.com/leroy-merlin-br/lm-instala-android.git

cd lm-instala-android
```


### Configuring It
2. Download the appropriate JDK for your system.
</br>
3. Install Android Studio.
</br>
4. Import the project. Open Android Studio, click Open an existing Android Studio project and select the project.
Gradle will build the project.
</br>
5. Add a file called signing.properties in the root of the project. The
file must contain the following structure:

```
        DEV_STORE_FILE=value
        DEV_STORE_PASSWORD="value
        DEV_KEY_ALIAS=value
        DEV_KEY_PASSWORD=value

        HOM_STORE_FILE=value
        HOM_STORE_PASSWORD=value
        HOM_KEY_ALIAS=value
        HOM_KEY_PASSWORD=value

        PRD_STORE_FILE=value
        PRD_STORE_PASSWORD=value
        PRD_KEY_ALIAS=value
        PRD_KEY_PASSWORD=value
```

</br></br>

### Running it

1. On terminal type
```
mvn clean install -Dmaven.test.skip=true
```

2. Use as dependent module in other modules.


</br></br>

## Testing

To run the tests, run the command :pray:

```
mvn test
```
Maven himself is in charge of running the tests and returning the results.

</br>

## Main Features

- Login as a Service Agent
- View Service Orders related to the Service Agent
- Chat with Service Provider
- Take pictures and videos
- Define Service Agent availability

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

