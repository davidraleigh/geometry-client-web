# geometry-client-web

This project can be used by visiting http://geometry.fogmodel.io. The user interface demonstrates the capabilities of the GIS computational library called "geometry-api-cs". The geometry-api-cs library is created through semi-automated port of the [geometry-api-java](http://github.com/esri/geometry-api-java.git) library. This means all updates to the geometry-api-java library are pushed to the geometry-api-cs library.

This web interface relies on a [geometry-worker](http://github.com/davidraleigh/geometry-worker) library that listens for RabbitMQ messages.

An additional demonstration of working with the RabbitMQ geometry-worker and the communication patterns can be explored at the [geometry-client-rabbitmq](http://github.com/davidraleigh/geometry-client-rabbitmq) project.
