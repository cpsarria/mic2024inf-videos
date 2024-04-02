# Prepare videos

## Generar list

```for i in $(ls VID*); do echo file $i >> list.txt; done ```

## Concatenar videos

```ffmpeg -f concat -i list.txt -c copy full-match.mp4 ```

## Convertir video

```ffmpeg -an -i full-match.mp4 -vcodec libx264 -pix_fmt yuv420p -profile:v baseline -level 3 output.mp4```


