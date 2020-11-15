echo "adding the public signing key"
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -

sudo apt-get install apt-transport-https
echo "Adding elastic search to the source list."
echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-7.x.list
echo "Updating the sources and installing ElasticSearch."
sudo apt-get update && sudo apt-get install elasticsearch
