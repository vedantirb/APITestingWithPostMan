lines=$(wc -l < jMeterReqCSV.csv)
echo $lines
jmeter -n -l result.jtl -o report -e -t jMeterHttpReqDay2.jmx -JdataFile=jMeterReqCSV.csv -Jthreads=$lines


