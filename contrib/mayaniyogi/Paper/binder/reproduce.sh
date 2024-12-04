d#!/bin/bash

# Step 1: Create the Conda environment from the environment.yml file
conda env create -f environment.yml

# Step 2: Activate the Conda environment
source activate ./econ_ark  # Replace "myenv" with the name of your environment if different

# Step 3: Run the Jupyter notebook to generate outputs (in-place execution)
jupyter nbconvert --to notebook --execute --inplace ../Working_notebook.ipynb

#!/bin/bash
# Create the environment
read -r -p "Do you want to create/update your environment? [y/n]" input

case $input in
    [yY][eE][sS]|[yY])
    conda env update --file ./binder/environment.yml 
    ;;
    [nN][oO]|[nN])
    echo "Environment will not be updated"
    ;;
    esac

# Activate environment
conda activate ./econ_ark
    
# Run the Jupyter notebook and execute all cells in place
python -m ipykernel install --user --name econark
jupyter nbconvert --to notebook --execute --inplace ../Working_notebook.ipynb
jupyter nbconvert --to notebook --execute --inplace ../Paper_MNiyogi.ipynb

# Build the PDF using myst
myst build --pdf