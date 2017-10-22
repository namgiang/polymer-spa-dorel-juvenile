FROM nginx
RUN apt-get update && apt-get install -y --no-install-recommends apt-utils curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs