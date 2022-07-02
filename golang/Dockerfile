FROM golang:1.19-rc-alpine3.16 AS builder

WORKDIR /app

COPY app .

RUN go build codeeducation.go
# end builder

FROM scratch AS codeeducation

WORKDIR /usr/bin

COPY --from=builder /app/codeeducation .

ENTRYPOINT [ "codeeducation" ]
