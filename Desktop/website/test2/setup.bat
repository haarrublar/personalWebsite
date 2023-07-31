@echo off
pip install virtualenv
python -m venv wenv
call wenv\Scripts\activate
python.exe -m pip install --upgrade pip
pip install -r requirements.txt
deactivate
@echo on