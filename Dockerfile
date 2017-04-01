FROM node:6

RUN mkdir -p shintech

WORKDIR /shintech

COPY . .

RUN rm -rf ./build/ ./node_modules/ && \
  yarn global add webpack && \
  printf "Creating file directories...\n" && \
  mkdir -p build/static 
  
RUN printf "Copying resources...\n"
COPY resources build/resources

RUN printf "Installing dependencies...\n" &&\
  yarn install && \

  printf "Building in progress...\nPlease wait...\n" && \
  npm run babel:build

RUN printf "starting app...\n"
CMD npm start
