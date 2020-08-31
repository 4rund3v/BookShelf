from logging.handlers import RotatingFileHandler
import logging
import config

def get_logger(service_name, logger_level=logging.DEBUG):
    '''
     @summary Get the logger instance for the service
    '''
    logging.basicConfig(level=logger_level, format="[%(asctime)s] %(levelname)s [%(name)s.%(funcName)s:%(lineno)d] %(message)s", datefmt='%Y-%m-%dT%H:%M:%S')
    logger = logging.getLogger(service_name)
    logger.setLevel(logger_level)
    handler = RotatingFileHandler(os.path.join(config.LOG_PATH,'{}.log'.format(service_name)), maxBytes=10000000, backupCount=5)
    logger.addHandler(handler)
    return logger
