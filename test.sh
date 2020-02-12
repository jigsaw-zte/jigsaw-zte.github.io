

cookie="JSESSIONID=mrvauzj6mrxbg3e3upws72a9"
for((i=1;i<5;i++));
do
	curl -k -X POST -H "Cookie: $cookie" https://localhost:26180/rdk/service/app/BigScreenNoc/server/module/getFlowHunnelPieData
	curl -k -H "Cookie: $cookie" https://localhost:26180/rdk/service/app/vreport/server/isAreaAvailable?p=%7B%22param%22:%7B%7D,%22app%22:%22vreport%22%7D
	curl -k -X POST -H "Cookie: $cookie" -d '{"param":{"condition":{"topN":"$i","times":{"beginTime":"2020-02-$i","endTime":"2020-02-$i","granularity":"5"},"filterList":{"filters":[{"fields":[],"filter_type":0}],"filter_type":0}},"paging":{"currentPage":1,"pageSize":10,"totalRecord":0},"isDrill":0,"area":[],"session":"$cookie","currentUserName":"admin"},"app":"vreport"}' https://localhost:26180/rdk/service/app/vreport/web/rpt_home/sys_lte_traffic_city/server/report_query 
	echo "---"
	# sleep 0.1
done





