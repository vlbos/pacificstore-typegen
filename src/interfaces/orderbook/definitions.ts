/* eslint-disable @typescript-eslint/camelcase */

export default {
    types: {
        OrderId: "Vec<u8>",
  TokenId: "Vec<u8>",
  FieldName: "Vec<u8>",
  FieldValue: "Vec<u8>",
  OrderField: {
    name: "FieldName",
    value: "FieldValue"
  },
  JSONField: {
    name: "FieldName",
    json: "Option<Vec<OrderField>>"
  },
  OrderJSONType: {
    index: "u64",
    id: "OrderId",
    owner: "AccountId",
    fields: "Option<Vec<OrderField>>",
    created_date: "Moment"
  },
    OrderQuery: {
    limit: "Option<u64>",
    offset: "Option<u64>",
    owner: "Option<AccountId>",
    token_ids: "Option<Vec<TokenId>>",
    params: "Option<Vec<OrderField>>"
  },
  AssetQuery: {
    owner: "Option<AccountId>",
    asset_contract_address: "Option<Vec<u8>>",
    token_ids: "Option<Vec<TokenId>>",
    search: "Option<Vec<u8>>",
    order_by: "Option<Vec<u8>>",
    order_direction: "Option<Vec<u8>>",
    limit: "Option<u64>",
    offset: "Option<u64>"
  },
  QueryParameter: {
    name: "String",
    value: "String"
  },
  OrderQueryJSON: {
    limit: "Option<u64>",
    offset: "Option<u64>",
    owner: "Option<AccountId>",
    token_ids: "Option<Vec<String>>",
    params: "Option<Vec<QueryParameter>>"
  },
  AssetQueryJSON: {
    owner: "Option<AccountId>",
    asset_contract_address: "Option<String>",
    token_ids: "Option<Vec<String>>",
    search: "Option<String>",
    order_by: "Option<String>",
    order_direction: "Option<String>",
    limit: "Option<u64>",
    offset: "Option<u64>"
  },
  JSONType: {
    fields: "Option<Vec<OrderField>>",
    jsons: "Option<Vec<JSONField>>"
  }
    }
};
