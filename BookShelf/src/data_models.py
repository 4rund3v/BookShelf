from sqlalchemy import create_engine
from BookShelf.etc import config
print(dir(etc))

import sqlalchemy
import utils

logger = utils.get_logger("data_models")
engine = create_engine(config.DB_PATH, echo=True)
logger.info("[data_models] The connection to engine established : {} ".format(engine))

