#!/bin/bash

# Step 1: Create the Conda environment from the environment.yml file
conda env create -f environment.yml

# Step 2: Activate the Conda environment
source activate myenv  # Replace "myenv" with the name of your environment if different

# Step 3: Run the Jupyter notebook to generate outputs (in-place execution)
jupyter nbconvert --to notebook --execute --inplace ../Working_notebook.ipynb

