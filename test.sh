for((i=1;i<5;i++));
do
	curl -I -m 10 -o /dev/null -s -w %{http_code} -k -X POST -H "Cookie: JSESSIONID=mrvauzj6mrxbg3e3upws72a9" -d '{"param":{"condition":{"topN":"$i","times":{"beginTime":"2020-02-$i","endTime":"2020-02-$i","granularity":"5"},"filterList":{"filters":[{"fields":[],"filter_type":0}],"filter_type":0}},"paging":{"currentPage":1,"pageSize":10,"totalRecord":0},"isDrill":0,"area":[],"session":"JSESSIONID=mrvauzj6mrxbg3e3upws72a9","currentUserName":"admin"},"app":"vreport"}' https://10.43.149.13:26180/rdk/service/app/vreport/web/rpt_home/sys_lte_traffic_city/server/report_query 
	echo "---"
	# sleep 0.1
done





