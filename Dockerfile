FROM node:6

RUN mkdir -p shintech

WORKDIR /shintech

COPY . .

RUN rm -rf ./build/ ./node_modules/ && \
  printf "Creating file directories...\n" && \
  mkdir -p build/static 
  
RUN printf "Copying resources...\n"
COPY resources build/resources

RUN printf "Installing dependencies...\n" &&\
  yarn install 

RUN  printf "Building in progress...\nPlease wait...\n" && \
  npm run build
  
RUN printf "Running tests...\n" && \
  npm test

CMD npm start
