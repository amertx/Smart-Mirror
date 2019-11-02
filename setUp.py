#imports
from datatime import data
from gs_quant.data import Dataset
from gs_quant.markets.securities import SecurityMaster, AssetIdentifier
from gs_quant.session import GsSession

#client ids
client_id = 'ed348c37fd5c4f41b055308a773f1ee3'
client_secret = 'b9522f2d46bb7a48d37ce76fb7a6b66f0f8da08f31cb09d3dd540df0ff8889a7'

#log into Marquee
scopes = GsSession.Scopes.get_default()
GsSession.use(client_id=client_id, client_secret=client_secret, scopes=scopes)

#retrieve data
ds = Dataset('USCANFPP_MINI')

#get a list of covered GSIDS
gsids = ds.get_coverage()['gsid'].values.tolist()
data = ds.get_data(data(2017,1,15),data(2018,1,15), gsid= gsids[0:5])

#peek at first few rows of data
print(data.head())

#retrieve asset metadata using securities master
for idx, row in data.iterrows():
    MarqueeAssetId = row['assetId']
    asset = SecurityMaster.get_asset(marqueeAssetId, AssetIdentifier.MARQUEE_ID)
    data.loc[data['assetId'] == marqueeAssetId, 'assetName'] = asset.name

print(data.head())
