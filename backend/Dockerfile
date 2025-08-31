# Стадия сборки
FROM golang:1.24-alpine AS build

WORKDIR /app
COPY . .

RUN go mod download
RUN go build -o app

# Финальный образ
FROM alpine:latest

WORKDIR /app
COPY --from=build /app/app .
COPY .env .

EXPOSE 8284
CMD ["./app"]
