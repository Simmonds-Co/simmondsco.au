.PHONY: deploy

deploy:
	aws s3 sync out/ s3://simmondsco.au --region ap-southeast-2 --acl public-read
	aws cloudfront create-invalidation --distribution-id=E3N39QLAHTSUA7 --paths '/*'
