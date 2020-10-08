#!/bin/sh

for file in *.png; do
  convert "$file" "${file%.*}.svg"
done

for file in *.jpeg; do
  convert "$file" "${file%.*}.svg"
done