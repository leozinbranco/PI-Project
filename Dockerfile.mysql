# Derivando da imagem oficial do MySQL
FROM mysql:5.7

# Configuração personalizada para o MySQL
RUN echo "[mysqld]" >> /etc/mysql/my.cnf
RUN echo "innodb_autoinc_lock_mode=2" >> /etc/mysql/my.cnf

# Adicionando os scripts SQL para serem executados na criação do banco
ENV MYSQL_ROOT_PASSWORD=12345678
ARG SETUP_DATABASE=db_pi_project
ARG SETUP_REMOTE_USERNAME=remote
ARG SETUP_REMOVE_PASSWORD=12345678

COPY ./db/CreateDatabases.sql /docker-entrypoint-initdb.d/setup.sql
RUN echo "CREATE USER '${SETUP_REMOTE_USERNAME}'@'%' IDENTIFIED BY '${SETUP_REMOVE_PASSWORD}';GRANT ALL PRIVILEGES ON *.* TO '${SETUP_REMOTE_USERNAME}'@'%' WITH GRANT OPTION;" > /docker-entrypoint-initdb.d/_grant_remote.sql
EXPOSE 3306
CMD ["mysqld"]