
# Etapa 1: Compilar a aplicação Java
FROM maven:3.9-eclipse-temurin-25 AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests

# Etapa 2: Executar a aplicação
FROM eclipse-temurin:25-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

# Porta utilizada pelo Render
EXPOSE 8080

# Iniciar o Spring Boot
CMD ["sh", "-c", "java -Dserver.port=${PORT:-8080} -jar app.jar"]
