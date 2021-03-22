# Welcome to the Climate-Crisis Dashboard!

## The goal of this project is to pull a vast amount of data to be able to see trends that are commonly associated with global warming and climate change. While we understand that many, many scientists are using much more advanced methods to collect, manipulate, calculate, and plot similar data, we wanted an easy way for users to be able to view the trends and see them with their own eyes (since many of us are not math geniuses).

## Please access the website via the GitHub pages link here: https://abordetskiy.github.io/Climate-Crisis/

### The website is straightforward and allows the user to easily jump between charts and datasets. The thumnails on the home page and the sidebar on the left of all pages allows access to each individual dataset. Once in a dataset, the thumbnails below and the dropdown at the top right will allow that chart to show up in the main window at the top. Clicking on the main chart will take you to the corresponding full-resolution image of that chart.

### Below are breif explanations of each dataset's origins and how they became the graphs that you are viewing.

#### Temperature:

#### Temperature readings are pulled via API from the National Centers for Environmental Information directly into a Python Script and mainipulated via the matplotlib library. The chosen sites were selected in the four corners of the continental United States with some in central states, Alaska, Hawaii, and several from the midwest and Texas specifically. The API endpoint URL is: https://www.ncei.noaa.gov/access/services/data/v1?dataset=global-summary-of-the-day&dataTypes=LATITUDE,LONGITUDE,TEMP&stations=72793024233,99999924233,72295023174,99999923174,72606014764,99999914764,72211012842,99999912842,72258013960,72258113960,72258313960,72270023044,99999923044,72251012924,72640014839,99999914839,72537094847,99999914822,72658014922,99999914922,70026027502,91182022521,72572024127,72434013994,99999913994&startDate=1950-01-01&endDate=2020-10-31&format=csv

#### Lakes and Rivers:

#### Data for Lakes and Rivers was manually pulled from the United States Geological Survey website, manipulated through several CSV files, and organized for import into Python via the Pandas .to_csv() method. The data was confined strictly to within Texas and River data was collected from two sites, upstream and downsstream. It is worth noting that nearly all of Texas' lakes are manmade and are technically reservoirs. The base URL that was used to search for this data is: https://waterdata.usgs.gov/nwis/sw

#### Storms

#### Storm data was originally also pulled manually from a National Centers for Environmental Information archive, but after issues pertaining to GitHub's large file storage capabilities, was changed to be pulled directly. This was done via webscraping in Python utilizing BeautifulSoup and Chrome Webdriver. The information was then passed into a SQL database and data was pulled via SQLAlchemy for graphing. Most of the data was collected starting in 1996, with the exception of Tornados and Thunderstorms, which had beed recorded as early as 1950. The base website that the web scrape pulled from is: https://www.ncdc.noaa.gov/stormevents/ftp.jsp

#### Greenhouse Gases

#### Greenhouse gas information was acquired manually from the Earth System Reserach Laboratory website. It was then manually manipulated in Python and Excel to produce graphs of the varying atmospheric gases. Interstingly enough, the site that recorded the data is the same as the site that recorded the temperature data in Alaska. The website where this data was pulled via search is: https://www.esrl.noaa.gov/gmd/dv/data/index.php?category=Greenhouse%2BGases&frequency=Monthly%2BAverages&site=BRW&type=Flask

###### If running any of the scripts, please be patient as these are large datasets and take a long time to pull, calculate, and graph. Running Storms.ipynb will require SQL integration(pgAdmin) in order to store the data into a database. Many different scripting languages, libraries, and methods were used in the making of this project. Primary languages were Python and HTML, while Excel and JavaScript were used to supplement either initial analysis, or website capabilities. Most notably used in Javascript was the Slim Select library, which allows for simple and attractive select dropdown boxes. It also adds the functionality to search within the dropdown, which is useful to avoid scrolling on the pages that have a larger number of charts. More information on this library can be found by Brian Voeler on https://slimselectjs.com/.
