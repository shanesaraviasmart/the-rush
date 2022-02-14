# the-rush

## Requirements
- docker
- docker-compose
## Installation and running this solution
1. Clone repo locally
2. Run "docker-compose up" (This should automatically build and run the app on localhost:3000)
3. Open your browser and navigate to "localhost:3000"

## Notes
#### Here are a few changes I thought would be important to note if this were a real app:
- Client and api would be separate repos.
- Data would be in db so i would do all filtering and sorting on the server side with dynamic sorting and filtering happening on the db queries themselves which is better for very large data. (I opted for doing this on the FE as i tested 100k records and it worked fine and since only 10k+ is required, it seems sufficient for this test)
- I also opted to save some time by reading and returning the file contents directly from the json file vs importing that data into a db and then dealing with it that way.
- Config files and such would be gitignored if any sensitive information present. (Included for test purposes)
- I would add loggers and tests.

## Screenshot
<img width="1512" alt="Screen Shot 2022-02-14 at 12 20 01 AM" src="https://user-images.githubusercontent.com/12818947/153804696-0e0c536d-f4a2-44cf-88ae-5946fd5b9770.png">
