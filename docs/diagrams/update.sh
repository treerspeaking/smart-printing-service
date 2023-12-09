drawio=$(cat "$PWD/drawio.txt")

function fetch_and_compile() {
    curl -L "https://drive.google.com/uc?export=download&id=${1}" -o "${1}.drawio"

    # Count how many pages based on <diagram element
    count=$(grep -o "<diagram" "${1}.drawio" | wc -l)

    # Process and get the list of diagram's namesa
    strings=$(cat ${1}.drawio | grep -o 'name="[^"]*"' | awk -F'"' '{print $2}')
    names=($strings)

    # Export each page as an PNG
    # Page index is zero based
    for ((i = 0; i <= $count - 1; i++)); do
        eval "$drawio --export --crop --transparent --page-index $i --output "${names[i]}.pdf" --format "pdf" "${1}.drawio""
        echo "$drawio --export --crop --transparent --page-index $i --output "${names[i]}.pdf" --format "pdf" "${1}.drawio""
        echo $i
    done
}

function source_from() {
    IFS=$'\n' read -d '' -r -a download_srcs <${1}

    for src in ${download_srcs[@]}; do
        fetch_and_compile ${src}
    done
}

# source.txt is only available on

cd task1
source_from "source.txt"
cd ../

cd task2
source_from "source.txt"
cd ../

cd task3
source_from "source.txt"
cd ../

find . -type f -iname "*.drawio" -delete
