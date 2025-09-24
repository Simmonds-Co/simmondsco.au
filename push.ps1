# PowerShell script to build Hugo site and push to AWS S3, then invalidate CloudFront cache

# Build the static content to the 'public' folder
hugo

# Sync the public folder to the S3 bucket (update the bucket name as needed)
aws s3 sync ./public/ s3://simmondsco.au --acl public-read

# Invalidate CloudFront CDN cache (update the distribution ID as needed)
# To get the distribution ID:
#   aws cloudfront list-distributions | Select-String 'Id'
aws cloudfront create-invalidation --distribution-id=E3N39QLAHTSUA7 --paths '/*'
