aws apigatewayv2 create-route \
--api-id <API_ID> \
--route-key "GET /health" \
--target integrations/<INTEGRATION_ID>