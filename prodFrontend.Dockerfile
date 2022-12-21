FROM python:3.9-alpine AS prebuild

ARG baseHrefUrl
ARG baseBackendURL
ARG backendApiURL

ENV baseHrefUrl=$baseHrefUrl
ENV baseBackendURL=$baseBackendURL
ENV backendApiURL=$backendApiURL

WORKDIR /build
COPY . .

# Reads baseHrefUrl, baseBackendURL, backendApiURL env variable and sets it for the frontend to utlize for api calls
# must be set before building frontend
RUN python3 setFrontendProdApiUrl.py

FROM node:12.11.1-alpine AS builder

WORKDIR /app

# copy over src code and editied env prod typescript file from python 'builder' image step
COPY --from=prebuild /build .

RUN npm install -g @angular/cli@9.0.5 @angular-devkit/build-angular
RUN npm install

RUN npm run build
